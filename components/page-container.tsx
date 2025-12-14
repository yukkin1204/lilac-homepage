import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export function PageContainer({ children }: Props) {
    return <div className="mx-auto max-w-7xl px-4">{children}</div>;
}
