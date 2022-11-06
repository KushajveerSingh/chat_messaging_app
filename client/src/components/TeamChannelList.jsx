import React from 'react';

import { AddChannel } from '../assets';

const TeamChannelList = ({ children, error = false, loading, type }) => {
  if (error) {
    if (type === 'team') {
      return (
        <div className="team-channel-list">
          <p className="team-channel-list__message">
            Connection error, please wait a moment and try again.
          </p>
        </div>
      );
    }
    return null;
  }

  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === 'team' ? 'Channels' : 'Messages'} loading...
        </p>
      </div>
    );
  }

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === 'team' ? 'Channels' : 'Direct Messages'}
        </p>
      </div>
      {children}
    </div>
  );
};

export default TeamChannelList;
