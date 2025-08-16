import React, { useState, useEffect } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { fetchSwitchStatus } from '../utils/api';

function SwitchStatus() {
    const [switchStatus, setSwitchStatus] = useState('CLOSED'); // 기본 상태
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            loadSwitchStatus();
        }, 1000); // 1초마다 상태 업데이트

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
    }, []);

    const loadSwitchStatus = async () => {
        setLoading(true);
        try {
            const response = await fetchSwitchStatus();
            if (response.data.length > 0) {
                setSwitchStatus(response.data[0].status);
            }
        } catch (error) {
            console.error("스위치 상태 가져오기 오류:", error);
        }
        setLoading(false);
    };

    return (
        <Card className="text-center mt-3">
            <Card.Body>
                <Card.Title>스위치 상태</Card.Title>
                {loading ? (
                    <Spinner animation="border" />
                ) : (
                    <h3>{switchStatus}</h3>
                )}
            </Card.Body>
        </Card>
    );
}

export default SwitchStatus;
