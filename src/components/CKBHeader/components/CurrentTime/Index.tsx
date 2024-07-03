import { CustomerDetail } from "@/model";
import { formatTimeZone } from "@/utils";
import { isJK } from "@/utils/language";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { useEffect, useRef, useState } from "react";

const CurrentTime = () => {
  const timerRef = useRef<{
    timer: NodeJS.Timer;
  }>({
    timer: null as unknown as NodeJS.Timer,
  });
  const [date, setDate] = useState<string>();
  const customerDetail = useAtomValue(CustomerDetail);

  useEffect(() => {
    const timer = timerRef.current.timer;
    clearInterval(+timer);
    let z: number = 0;
    if (isJK()) {
      z = 9;
    } else {
      z = customerDetail?.utcTimeZone
        ? Number(customerDetail?.utcTimeZone?.replace("UTC", ""))
        : 0 - new Date().getTimezoneOffset() / 60;
    }
    timerRef.current.timer = setInterval(() => {
      const date = dayjs(`${formatTimeZone(dayjs(new Date()), z)}`).format(
        "YYYY/MM/DD HH:mm:ss"
      );
      setDate(date);
    }, 1000);
    return () => clearInterval(+timer);
  }, [customerDetail?.utcTimeZone]);

  return <span>{date}</span>;
};

export default CurrentTime;
