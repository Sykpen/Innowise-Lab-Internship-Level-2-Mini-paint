import {
	CanvasHTMLAttributes,
	ChangeEvent,
	DetailedHTMLProps,
	useEffect,
	useRef,
	useState,
} from "react";

const Canvas = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	let canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

	const [isDrawing, setisDrawing] = useState<boolean>(false);

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

		setisDrawing(true);
	};

	const finishDrawing = () => {
		canvasCtxRef.current?.closePath();
		setisDrawing(false);
	};

	const draw = (e: React.MouseEvent) => {
		if (!isDrawing) {
			return;
		}
		const nativeEvent = e.nativeEvent;
		const { offsetX, offsetY } = nativeEvent;

		canvasCtxRef.current?.lineTo(offsetX, offsetY);
		canvasCtxRef.current?.stroke();
	};

	return (
		<div>
			<canvas
				onMouseDown={startDrawing}
				onMouseUp={finishDrawing}
				onMouseMove={draw}
				ref={canvasRef}
			></canvas>
		</div>
	);
};

export default Canvas;
