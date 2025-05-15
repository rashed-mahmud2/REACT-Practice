import Button from 'react-bootstrap/Button';

function ReactBootstrap() {
    return (
        <>
         <h4>Card Title</h4>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vitae rerum dicta similique ipsum dolore, debitis tenetur libero mollitia corporis.</p>
         <button className='btn btn-primary'>Learn more</button>
         <Button as='a' variant='outline-primary' className='rounded-circle'>Learn more 2</Button>
        </>
    )
}

export default ReactBootstrap;