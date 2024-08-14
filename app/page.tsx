import Chatbot from "./components/Chatbot/chatbot";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <p>Flowbite Svelte Chatbot</p>
     <Chatbot/>
    </main>
  );
}
