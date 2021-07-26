import Header from './index';

export default {
    component: Header,
    title: 'Components/Header',
};

const Template = (args) => <Header {...args}/>;

export const Main = Template.bind({});

