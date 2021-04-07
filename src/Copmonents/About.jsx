import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const About = () => {
  const history = useHistory();
  console.log(history);

  // useEffect(() => {
  //   console.log('WE are here!!!!');
  //   setTimeout(() => {
  //     console.log('PUSH!!!');
  //     history.push('/');
  //   }, 3000);
  // }, []);

  return (
    <div>
      <h1>About</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo ut
        tempora cupiditate quibusdam vero incidunt reprehenderit ipsa
        voluptatem, maiores voluptatibus, blanditiis dolores sequi esse pariatur
        obcaecati. Rerum magni ex, voluptatem assumenda porro quisquam?
        Reiciendis quidem ut earum aliquid eveniet natus? Aut fugit, commodi
        corrupti nihil nobis quaerat beatae fugiat? Placeat soluta facilis dolor
        necessitatibus? Sequi perspiciatis vitae, pariatur accusantium illum
        fugit doloremque, magni ullam molestias eligendi obcaecati iure
        voluptatum! Fugit optio labore voluptas itaque? Minima iusto vitae
        aspernatur repellat nihil amet, ullam commodi rem tenetur consectetur
        maxime eveniet possimus enim quidem, iste consequatur necessitatibus
        voluptatum, perferendis nobis nostrum est.
      </div>
      <button onClick={() => history.push('/')}>GO HOME!!!</button>
      <button onClick={() => history.goBack()}>USERS</button>
      <button onClick={() => history.goForward()}>FORWARD</button>
    </div>
  );
};

export default About;
