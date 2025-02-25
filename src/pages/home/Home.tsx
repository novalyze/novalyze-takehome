import { type KeyboardEvent, useRef, useState } from "react"
import pdfDocument from "../../resources/sample.pdf"

const Chatbot = () => {
	const [messages, setMessages] = useState<string[]>(["Test A", "Test B"])

	const inputElRef = useRef<HTMLInputElement>(null)

	const registerMessage = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== "Enter") return

		const buffer = [...messages, e.currentTarget.value]
		setMessages(buffer)

		if (inputElRef.current === null) return
		inputElRef.current.value = ""
	}

	return (
		<>
			{messages.map((msg, i) => (
				<div key={i}>{msg}</div>
			))}
			<input
				ref={inputElRef}
				type="text"
				placeholder="Ask me anything"
				className="border border-indigo-600 p-3"
				onKeyDown={registerMessage}
			/>
		</>
	)
}

const PDFDocument = () => (
	<object
		title="Sample PDF Document"
		data={pdfDocument}
		type="application/pdf"
	/>
)

export default function () {
	return (
		<>
			<div className="flex">
				<div className="w-80">
					<Chatbot />
				</div>
				<div className="w-full">
					<PDFDocument />
				</div>
			</div>
		</>
	)
}
