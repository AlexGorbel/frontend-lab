import React, {useState} from "react";
import Button from "../../Button";
import Modal from "../../Modal";


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handelClick = () => {
        setIsOpen(true);
    }

    return (
        <>
            <Button onClick={handelClick}>
                Get Started
            </Button>
            {isOpen && (
                <Modal onClose={() => setIsOpen(false)} title='Authentication'>
                    Main Content
                </Modal>
            )}
        </>
    );
}

export default Navigation;