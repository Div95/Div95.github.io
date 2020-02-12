import { useStaticQuery, graphql } from 'gatsby';

function useSocialLinks() {
  const data = useStaticQuery(graphql`
    query Query {
      allSocialLinksYaml {
        nodes {
          href
          label
          title
        }
      }
    }
  `);

  const { nodes } = data.allSocialLinksYaml;

  return nodes;
}

export default useSocialLinks;
