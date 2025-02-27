import { type KeyboardEvent, useRef, useState } from "react"
import styles from "./Home.module.scss"
import pdfDocument from "../../resources/sample.pdf"

const Chatbot = () => {
	const [messages, setMessages] = useState<string[]>(["Test A", "Test B"])

	const inputElRef = useRef<HTMLInputElement>(null)

	const registerMessage = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== "Enter" || e.currentTarget.value.trim().length < 1) return

		const buffer = [...messages, e.currentTarget.value]
		setMessages(buffer)

		if (inputElRef.current === null) return
		inputElRef.current.value = ""
	}

	return (
		<div className={styles.chatbot}>
			<div className={styles.chatbotMessagesContainer}>
				{messages.map((msg, i) => (
					<div className={styles.chatbotMessage} key={i}>
						{msg}
					</div>
				))}
			</div>
			<input
				ref={inputElRef}
				type="text"
				placeholder="Ask me anything, and press Enter."
				onKeyDown={registerMessage}
			/>
		</div>
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
		<div className={`${styles.reveal} ${styles.home}`}>
			<div className={styles.chatbotContainer}>
				<Chatbot />
			</div>
			<div className={styles.documentContainer}>
				<PDFDocument />
			</div>
		</div>
	)
}
