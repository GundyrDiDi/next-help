/* eslint-disable @next/next/no-img-element */
import { CAN_USE_DOM } from "@lexical/utils";
import { DragEvent, useEffect, useRef, useState } from "react";

/*
 * @Author: shiguang
 * @Date: 2024-06-11 16:37:01
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 21:20:17
 * @Description: 
 */

enum OverSea {
    cn = 0,
    jp = 1,
    us = 2
}
/******  
 * 美国站抄来的
 */
export const BucketNames = {
    test: {
        [OverSea.cn]: 'ckb-service-test',
        [OverSea.jp]: 'test-img-theckb',
        [OverSea.us]: 'test-img-theckb'
    },
    pre: {
        [OverSea.cn]: 'ckb-service-prod',
        [OverSea.jp]: 'img-jp-prod-theckb',
        [OverSea.us]: 'static-us-prod-theckb'
    },
    prod: {
        [OverSea.cn]: 'ckb-service-prod',
        [OverSea.jp]: 'img-jp-prod-theckb',
        [OverSea.us]: 'static-us-prod-theckb'
    }
} as const;

const getUploadEnv = () => {
    if (!CAN_USE_DOM) return 'prod'
    if (window.location.host.startsWith('pre-system.theckb.com')) {
        return 'pre'
    } else if (window.location.host === 'system.theckb.com') {
        return 'prod'
    } else {
        return 'test'
    }
}

const getBucketName = () => {
    return BucketNames[getUploadEnv()]
}

const getHost = () => {
    if (window.location.host.startsWith('pre-system.theckb.com')) {
        return `https://pre-gateway.theckb.com`
    } else if (window.location.host === 'system.theckb.com') {
        return `https://gateway.theckb.com`
    } else {
        return `https://master-gateway.theckb.com`;
    }
}

const createUploadParams = () => {
    const uploadData = {
        key: '',
        policy: '',
        OSSAccessKeyId: '',
        Signature: '',
        'Content-Disposition': 'inline',
        'x-oss-object-acl': 'public-read',
        'x-oss-forbid-overwrite': false,
        success_action_status: 200
    };
    return uploadData;
}

export const getOssSign = async ({ path, overwrite, overseaType }: { path: string; overwrite: '0' | '1'; overseaType: OverSea }) => {
    const re = await fetch(`${getHost()}/customer/oss/sign/another?bucketName=${getBucketName()[overseaType]}&path=${path}&type=${overwrite}`, {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json",
            "x-authtoken": "eyJhbGciOiJIUzI1NiJ9.eyJuaWNrIjoiYWRtaW4iLCJleHAiOjE3MTg2MTQ4NDcsInVzZXJJZCI6IjE1NDIzMzk4Njc2ODY4OTE1MjIiLCJ1c2VybmFtZSI6ImFkbWluIn0.nmgc62KV0IVXDbClTYiy2R1J-sl18D2snbXcBc0XuDg",
            "x-gray-tag": "20240509-frog"
        },
        "referrer": "https://pre-system.theckb.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{}",
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    });
    return await re.json();
}
interface OSSData {
    accessId?: string;
    signature?: string;
    policy?: string;
    dir?: string;
    host?: boolean;
}
const requestUpload = async (file: File) => {
    const _data = await getOssSign({ path: '', overseaType: OverSea.jp, overwrite: '0' });
    const _OSSData = _data.data
    const uploadParams: any = createUploadParams()

    const suffix = file.name.slice(file.name.lastIndexOf('.'));
    const filename = Date.now() + suffix;
    const fileUrl = _OSSData?.dir + filename;
    // @ts-ignore
    file.url = fileUrl;
    uploadParams.key = fileUrl;
    uploadParams.OSSAccessKeyId = _OSSData?.accessId ?? '';
    uploadParams.Signature = _OSSData?.signature ?? '';
    uploadParams.policy = _OSSData?.policy ?? '';
    const form = new FormData();
    // eslint-disable-next-line guard-for-in
    Object.keys(uploadParams).forEach(key => {
        form.append(key, uploadParams[key]);
    })
    form.append('file', file);
    await fetch(_OSSData?.host, {
        method: 'POST',
        body: form
    })
    const url = `${_OSSData?.host}/${uploadParams.key}`;
    console.log(url, 555555)
    return url;
    // return `${_OSSData?.host}/${uploadParams.key}`;
}

interface ImageUploadProps {
    inputClassName?: string;
    imageClassName?: string;
    onChange?: (url?: string) => void;
    children?: React.ReactNode | ((url?: string) => React.ReactNode);
}
const ImageUpload = (props: ImageUploadProps) => {
    const { children, onChange } = props;
    const [fileList, setFileList] = useState<File[]>();
    const [uploadStatus, setUploadStatus] = useState('');

    const useRefOnChang = useRef<((url?: string) => void) | undefined>(onChange)
    useRefOnChang.current = onChange

    const [urlList, setUrlList] = useState<string[]>();
    const [dragging, setDragging] = useState(false);


    const inputRef = useRef<HTMLDivElement>(null);

    // const handleImageSelection = (event) => {
    //     setSelectedImage(event.target.files[0]);
    // };

    useEffect(() => {
        if (!fileList?.length) return;
        (async () => {
            const first = fileList[0];
            const url = await requestUpload(first);
            setUrlList([url]);
            useRefOnChang.current?.(url)
            // 上传
            console.log(first)
        })()

    }, [fileList])
    // const handleImageUpload = async () => {
    //     if (!selectedImage) return;

    //     const formData = new FormData();
    //     formData.append('image', selectedImage);

    //     try {
    //         setUploadStatus('Uploading...');
    //         const response = await axios.post('/api/upload', formData);
    //         setUploadStatus('Upload successful!');
    //         console.log(response.data);
    //     } catch (error) {
    //         setUploadStatus('Upload failed!');
    //         console.error(error);
    //     }
    // };

    const url = urlList?.[0];

    const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(false);
        const selectedFile = e.dataTransfer.files[0];
        setFileList([selectedFile])
    };

    return <div
        className="bg-[#f5f5f5] relative flex items-start h-fit"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        ref={inputRef}
    >
        {/* {!!url && <img
            src={url}            
            alt=""
            className="hover:cursor-pointer max-w-[100%] max-h-[100%]"
            onClick={() => {
                inputRef.current?.click()
            }}
        />} */}
        {!url && typeof children !== 'function' && children}
        {typeof children === 'function' && children(url)}
        <input
            className={`bg-gray-800 absolute top-[0] bottom-[0] left-[0] right-[0] opacity-0`}
            type="file"
            accept="image/*"
            onChange={(event) => {
                const file = event.target.files?.[0]
                if (!file) return;
                setFileList([file])
            }}
        />
    </div>
}

export default ImageUpload;