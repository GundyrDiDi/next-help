"use client"
import FloatToolbar from '@/components/FloatToolbar';
import CKBHeader from './modules/CKBHeader';
import './index.css';
import { CustomerDetail } from '@/model';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
export interface CKBLayoutProps {
    children?: React.ReactNode;
}

export const atomRequestCustomerDetail = CustomerDetail;


const CKBLayout: React.FC<CKBLayoutProps> = (props: CKBLayoutProps) => {
    const { children,  } = props;
    const [customerDetail, requestCustomerDetail] = useAtom(
        atomRequestCustomerDetail
    );

    useEffect(() => {
        requestCustomerDetail();
    }, [requestCustomerDetail]);
    
    return (
        <div className="bg-[#f8f8f8]">
            <CKBHeader />
            <FloatToolbar />
            <div
                className="flex"
                style={{
                    height: 'calc(100vh - 32px)'
                }}
            >
                <div
                    className="p-[10px]"
                    style={{
                        overflowY: 'scroll',
                        flexGrow: 2,
                        backgroundColor: '#F8F8F8'
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
export default CKBLayout;
