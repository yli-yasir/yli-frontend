import Zoom from './index';

export default {
    component: Zoom,
    title: 'Components/Zoom',
};

const Template = (args) => <Zoom {...args}/>;

export const Main = Template.bind({});

Main.args ={
    in: true,
    timeout: 1000,
    children: <div>Hello Zoom</div>
}
