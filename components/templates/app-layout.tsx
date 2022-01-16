// import { Navbar } from '../organisms/navbar';
// import { Footer } from '../organisms/footer';
import { classNames } from '@/utils/helpers';

import type { TAppLayout } from '@/types/app.type';

export const AppLayout = ({ className, children }: TAppLayout) => {
    return (
        <div className={classNames('relative', className)}>
            {/* <Navbar /> */}
            <div>{children}</div>
            {/* <Footer /> */}
        </div>
    );
};
