async function startWebRTC() {
    // 사용자 정의 해상도 설정 (720x1280)
    const constraints = {
        video: {
            width: { ideal: 480 },
            height: { ideal: 854 }
        }
    };

    try {
        // 미디어 스트림 가져오기
        const stream = await navigator.mediaDevices.getUserMedia(constraints);

        // 비디오 요소에 스트림 설정
        const videoElement = document.getElementById('localVideo');
        videoElement.srcObject = stream;
    } catch (error) {
        console.error('Error accessing media devices.', error);
    }
}

// WebRTC 시작
startWebRTC();

