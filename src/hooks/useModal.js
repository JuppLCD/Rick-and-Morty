import { useState } from "react";

export const useModal = () => {
	const [show, setShow] = useState({ status: false });

	// Modal Characters
	const handleClose = () => setShow({ status: false });
	const handleShow = (id) => {
		setShow({ status: true, id });
	};

	return [show, handleClose, handleShow];
};
