import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Image from "react-bootstrap/Image";

const MediaManagement = () => {
  // Sample image URL and progress value
  const rechardImage = "https://via.placeholder.com/800x400"; // 예시 이미지 URL
  const [now, setNow] = useState(0);

  // Simulating progress update
  useEffect(() => {
    const interval = setInterval(() => {
      setNow((prev) => (prev < 100 ? prev + 10 : prev));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ margin: 40 }}>
      <Image
        src={rechardImage}
        style={{ width: "50rem", height: "25rem", marginBottom: 40 }}
      />
      <ProgressBar
        animated
        now={now}
        label={`${now}%`}
        style={{ width: "50rem" }}
      />
    </div>
  );
};

export default MediaManagement;
