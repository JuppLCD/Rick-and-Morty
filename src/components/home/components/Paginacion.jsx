import { Pagination } from "react-bootstrap";

export const Paginacion = ({ totalPages, actualPage, changePage }) => {
	let arrPages = [];
	for (let i = 1; i <= totalPages; i++) {
		arrPages.push(i);
	}
	return (
		<Pagination className="justify-content-center py-4">
			{!(actualPage === 1) && <Pagination.Prev onClick={() => changePage(actualPage - 1)} />}

			{arrPages.map((numb) => (
				<Pagination.Item key={numb} className={actualPage === numb ? "active" : ""} onClick={() => changePage(numb)}>
					{numb}
				</Pagination.Item>
			))}

			{!(actualPage === totalPages) && <Pagination.Next onClick={() => changePage(actualPage + 1)} />}
		</Pagination>
	);
};
