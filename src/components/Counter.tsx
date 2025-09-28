import { createSignal } from "solid-js";


export const Counter = () => {

    const [counter, setCounter] = createSignal(10);



    return (
        <>
            <h1>Counter</h1>
            <h3>Value{counter()}</h3>

            <button
                onclick={() => {
                    setCounter(prev => ++prev)
                }}
                class="bg-blue-500 p-2 hover:cursor-pointer mr-2 rounded-md text-white font-bold items-center">+1</button>
            <button onclick={() => {
                setCounter(prev => --prev)
            }} class="bg-blue-500 p-2 hover:cursor-pointer mr-2 rounded-md text-white font-bold items-center">-1</button>

        </>
    );
}