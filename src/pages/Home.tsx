import React, { type KeyboardEvent, useRef, useState } from "react";
import Header from '../components/Header';

const Chatbot = () => {
	const [messages, setMessages] = useState<string[]>([
		'Test A',
		'Test B'
	])

	const inputElRef = useRef<HTMLInputElement>(null)

	const registerMessage = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== 'Enter')
			return

		const buffer = [ ...messages, e.currentTarget.value ]
		setMessages(buffer)

		inputElRef.current!.value = ''
	}

	return <>
		{
			messages.map((msg, i) => (
				<div key={i}>{ msg }</div>
			))
		}
		<input ref={inputElRef} type="text" placeholder="Ask me anything"
			className="border border-indigo-600 p-3"
			onKeyDown={registerMessage}/>
	</>
}

const Home: React.FC = () => {
  return (
    <>
        <Header />
        <div className="flex">
	       <div className="w-80">
			<Chatbot />
		   </div>
		   <div className="bg-gray-background-dark w-full">
			PDF
		   </div>
        </div>
    </>
  );
};

export default Home;
