import {useStaticQuery, graphql} from 'gatsby';

export const WorkingGroupsStaticQuery = () => {
    const {allGoogleSheetTeamDirectoryRow} = useStaticQuery(
        graphql`
        query WorkingGroupsStaticQuery {
          allGoogleSheetTeamDirectoryRow(sort: {fields: person}) {
            group(field: subGroup) {
              fieldValue
              edges {
                node {
                  name: person
                  location
                }
              }
            }
          }
        }
    `
    );
    return allGoogleSheetTeamDirectoryRow.group;
};
