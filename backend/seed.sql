-- seed.sql
INSERT INTO books (title, author)
VALUES 
('Władca Pierścieni', 'J.R.R. Tolkien'),
('1984', 'George Orwell'),
('Hobbit', 'J.R.R. Tolkien');

INSERT INTO loans (book_id, borrower_name, loan_date)
VALUES
(1, 'Jan Kowalski', CURRENT_DATE),
(2, 'Anna Nowak', CURRENT_DATE);