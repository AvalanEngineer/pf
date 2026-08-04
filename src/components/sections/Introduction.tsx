'use client';

import React, { useState, useEffect } from 'react';
import styles from '@styles/introduction.module.css';
import { portfolioData } from "@lib/data/portfolio.data.ts";
import { Button } from '@components/ui/Button';
import { ButtonVariant, ButtonShape } from '@lib/enums/button.enum';

type TypewriterProps = {
    names: string[];
};

const Typewriter: React.FC<TypewriterProps> = ({ names }) => {
    const [text, setText] = useState('');
    const [nameIndex, setNameIndex] = useState(0);
    const [isErasing, setIsErasing] = useState(false);

    useEffect(() => {
        const currentName = names[nameIndex];
        let timeout: NodeJS.Timeout;

        if (isErasing) {
            timeout = setTimeout(() => {
                setText((prev) => prev.slice(0, -1));
                if (text === '') {
                    setIsErasing(false);
                    setNameIndex((prev) => (prev + 1) % names.length);
                }
            }, 100);
        } else {
            timeout = setTimeout(() => {
                setText(currentName.slice(0, text.length + 1));
                if (text === currentName) {
                    setTimeout(() => setIsErasing(true), 1000);
                }
            }, 150);
        }

        return () => clearTimeout(timeout);
    }, [text, isErasing, nameIndex, names]);

    return <h1 className={styles.typewriter}>{text}</h1>;
};

function Introduction() {
    const handleButtonClick = () => {
        if (portfolioData.introduction.button_link) {
            window.open(portfolioData.introduction.button_link, '_blank');
        }
    };

    return (
        <div className={styles.introduction}>
            <p className={styles.greeting}>Hello, my name is</p>
            <h1 className={styles.title}>{portfolioData.introduction.title}</h1>
            <Typewriter names={portfolioData.introduction.subTitle} />
            <p className={styles.content}>{portfolioData.introduction.content}</p>
            <Button
                variant={ButtonVariant.ELEVATED}
                shape={ButtonShape.RECTANGLE}
                onClick={handleButtonClick}
                padding={"0.65rem 2.5rem"}
            >
                {portfolioData.introduction.button}
            </Button>
        </div>
    );
}

export default Introduction;