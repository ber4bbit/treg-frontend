import type { Metadata } from "next";
import type { ReactElement } from "react";
import "./styles/globals.scss";

export const metadata: Metadata = {
    title: "Веб-дизайн и разработка сайтов - Веб-студия TREG",
    description: "Профессиональная веб-студия TREG. Компания использует современные технологии " +
        "в нашихосновных направлениях digital-услуг: разработка, seo продвижение, поддержка сайта, веб-дизайн, контекстная " +
        "реклама и копирайтинг. Заказать услуги на нашем сайте или по телефону 8 985 636-14-24",
};

const RootLayout = ({ children }: { children: React.ReactNode }): ReactElement => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;