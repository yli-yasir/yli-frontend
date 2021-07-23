import Card from './index';

export default {
    component: Card,
    title: 'Components/Card',
};

const Template = (args) => <Card {...args}/>;

export const Main = Template.bind({});

Main.args = {
    title: "timetable-assistant",
    description:"This is a program built with java",
    topics: ["Java","JavaFx","MVC"],
    date: "2004-4-4"
}
