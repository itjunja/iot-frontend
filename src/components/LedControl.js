import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { toggleLed } from '../utils/api';

function LedControl() {
    const [ledState, setLedState] = useState('OFF'); // 기본 상태
    const [loading, setLoading] = useState(false);

    // 버튼 클릭 시 LED 상태 변경
    const handleLedControl = async () => {
        setLoading(true);
        const newState = ledState === 'ON' ? 'OFF' : 'ON';
        try {
            await toggleLed(newState);
            setLedState(newState); // 상태 업데이트
        } catch (error) {
            console.error("LED 제어 오류:", error);
        }
        setLoading(false);
    };

    return (
        <div className="text-center mt-3">
            <h2>LED 제어</h2>
            <Button
                onClick={handleLedControl}
                disabled={loading}
                style={{
                    backgroundColor: ledState === 'ON' ? 'green' : 'red',
                    borderColor: ledState === 'ON' ? 'green' : 'red'
                }}
            >
                {loading ? <Spinner animation="border" size="sm" /> : ledState}
            </Button>
        </div>
    );
}

export default LedControl;
