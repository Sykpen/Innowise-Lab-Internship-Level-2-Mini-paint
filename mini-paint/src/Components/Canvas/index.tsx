import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CanvasControllPanel from "../CanvasControllPanel";

import { RootState } from "../../index";

import styles from "./styles.module.css";

import Icoords from '../../Types/toolsTypes'


const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  const [isDrawing, setisDrawing] = useState<boolean>(false);

  const [startPoint, setStartPoint] = useState<Icoords>({ x: 0, y: 0 });

  const [canvasImgData, setCanvasImgData] = useState<ImageData>();

  const currentChoosenTool = useSelector(
    (state: RootState) => state.tools.currentChosenTool
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas != null) {
      canvas.width = 500;
      canvas.height = 500;
      canvas.style.width = "500px";
      canvas.style.height = "500px";

      const context = canvas.getContext("2d");
      context!.strokeStyle = "black";
      context!.lineCap = "round";
      context!.lineWidth = 1;
      canvasCtxRef.current = context;
    }
  }, []);

  const startDrawing = (e: React.MouseEvent) => {
    const nativeEvent = e.nativeEvent;
    const { offsetX, offsetY } = nativeEvent;

    canvasCtxRef.current?.beginPath();
    canvasCtxRef.current?.moveTo(offsetX, offsetY);

    setStartPoint({ x: offsetX, y: offsetY });

    setCanvasImgData(canvasCtxRef.current?.getImageData(0, 0, 500, 500));

    setisDrawing(true);
  };

  const finishDrawing = () => {
    switch (currentChoosenTool) {
      case "pencil": {
        canvasCtxRef.current?.closePath();
        break;
      }
    }

    setisDrawing(false);
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) {
      return;
    }
    const nativeEvent = e.nativeEvent;
    const { offsetX, offsetY } = nativeEvent;

    const { x, y } = startPoint;

    if (canvasImgData) {
      canvasCtxRef.current?.putImageData(canvasImgData, 0, 0);
    }

    switch (currentChoosenTool) {
      case "pencil": {
        canvasCtxRef.current?.lineTo(offsetX, offsetY);
        canvasCtxRef.current?.stroke();
        break;
      }
      case "rectangle": {
        canvasCtxRef.current?.strokeRect(x, y, offsetX - x, offsetY - y);
        break;
      }
      case "filledRectangle": {
        canvasCtxRef.current?.fillRect(x, y, offsetX - x, offsetY - y);
        break;
      }
      case "circle": {
        canvasCtxRef.current?.beginPath();
        canvasCtxRef.current?.arc(
          x,
          y,
          Math.sqrt(Math.pow(x - offsetX, 2) + Math.pow(y - offsetY, 2)),
          0,
          2 * Math.PI
        );
        canvasCtxRef.current?.stroke();
        canvasCtxRef.current?.closePath();
        break;
      }
      case "filledCircle": {
        canvasCtxRef.current?.beginPath();
        canvasCtxRef.current?.arc(
          x,
          y,
          Math.sqrt(Math.pow(x - offsetX, 2) + Math.pow(y - offsetY, 2)),
          0,
          2 * Math.PI
        );
        canvasCtxRef.current?.fill();
        canvasCtxRef.current?.closePath();
        break;
      }
      case "line": {
        canvasCtxRef.current?.beginPath();
        canvasCtxRef.current?.moveTo(x, y);
        canvasCtxRef.current?.lineTo(offsetX, offsetY);
        canvasCtxRef.current?.stroke();
        canvasCtxRef.current?.closePath();
      }
    }
  };

  return (
    <div className={styles.canvas_app_container}>
      <div className={styles.canvas_container}>
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        ></canvas>
      </div>
      <CanvasControllPanel />
    </div>
  );
};

export default Canvas;
