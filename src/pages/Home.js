import Card from "../components/Card";
import { GET_REPOSITORIES } from "../graphql/operations";
import Page from "../components/Page";
import { useQuery } from "@apollo/client";
import styled from 'styled-components';
import RepoList from "../components/RepoList";

export default function Home() {
  return (
    <Page>
        <RepoList></RepoList>
    </Page>
  );
}