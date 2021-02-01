import { useState } from "react"
import { Modal } from "../components/modal"

export default function WithModal() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    <h1>With modal</h1>
    <button onClick={() => setShowModal(!showModal)}>Toggle modal</button>
    {showModal && <Modal />}
    </>

  )
}
