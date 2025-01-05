"use client";

import { useLocale } from "next-intl";
import React from "react";

const BtnReset: React.FC<{ onReset: () => void }> = ({ onReset }) => {
    const locale = useLocale()
    return (
        <button
            onClick={onReset}
            className="btn btn-neutral w-52">
            {locale == "ar" ? "الكل" : "Tous"}
        </button>
    );
};

export default BtnReset;
