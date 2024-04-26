

const p1 = '<a href="./frontend/src/Components/index.html"></a>';
const p2 = 'Validation page'
const buildPages = (index, content) => (
    <>
        <h3>Page {index}</h3>
        <div>Page {index} content: {content} </div>
    </>
);

export const PageOne = () => buildPages(1, p1)
export const PageTwo = () => buildPages(2, p2)
