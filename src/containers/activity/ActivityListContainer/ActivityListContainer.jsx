import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import ActivityMenu from '../../../components/activity/ActivityMenu/ActivityMenu';
import ActivityList from '../../../components/activity/ActivityList/ActivityList';
import { useSelector } from 'react-redux';
import * as activityAPI from '../../../lib/api/activity';

const ActivityListContainerBlock = styled.div`
  position: relative;
  top: 0px;
  width: 90%;
  left: 5%;
  right: 5%;
  display: flex;
  margin: 0px 0 300px 0;
  @media (max-width: 576px) {
    margin-bottom: 500px;
    flex-direction: column;
  }
`;

const ActivityListContainer = ({ location, history, match }) => {
  const currentLocation = location.search.replace('?semester=', '');
  const member = useSelector((state) => state.auth);

  const [activities, setActivities] = useState(null);
  const [semesters, setSemesters] = useState(null);

  useEffect(() => {
    activityAPI.getActivityYears().then((res) => {
      if (res.status === 200) {
        setSemesters(res.data.data);
        console.log(res.data.data);
        if (res.data.data.length === 0) {
          activityAPI.getActivities().then((activities) => {
            setActivities(activities.data.data);
          });
        } else {
          activityAPI
            .getActivitiesByYears(
              currentLocation ? currentLocation : res.data.data[0],
            )
            .then((activities) => {
              setActivities(activities.data.data);
            });
        }

        // if (!currentLocation) {
        //   history.push(`/activities?semester=${res.data.data[0]}`);
        // }
      }
    });
  }, [history, currentLocation]);

  if (activities === null) {
    return null;
  }

  const onToggleRegisterActivity = (activityID) => {
    console.log(activityID);
    activityAPI.applyActivity(activityID).then((res) => {
      if (res.status === 200) {
      }
    });
  };

  return (
    <ActivityListContainerBlock>
      <ActivityMenu semesters={semesters} currentLocation={currentLocation} />
      <ActivityList
        activities={activities}
        onToggleRegisterActivity={onToggleRegisterActivity}
        member={member}
      />
    </ActivityListContainerBlock>
  );
};

export default withRouter(ActivityListContainer);
