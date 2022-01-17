import { Navbar } from '../organisms/navbar';
// import { Footer } from '../organisms/footer';
import { classNames } from '@/utils/helpers';

import type { TAppLayout } from '@/types/app.type';
import { useAuthContext } from '@/hooks/useAuthContext';

export const AppLayout = ({ className, children }: TAppLayout) => {
    const {
        state: { isLoggedIn }
    } = useAuthContext();
    return (
        <div className={classNames('relative', className)}>
            {isLoggedIn && <Navbar />}
            <div>{children}</div>
            {/* <Footer /> */}
        </div>
    );
};
