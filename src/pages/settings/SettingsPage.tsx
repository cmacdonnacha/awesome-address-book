import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Page from '../../components/Page';
import NationalitiesSelector from './NationalitiesSelector';
import Button from '../../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { nationalitiesSelector, Nationality, getSelectedNationalities } from '../../slices/settingsSlice';
import { resetContactsList, fetchContacts } from '../../slices/contactsSlice';

const SettingsInfoText = styled.p`
  display: flex;
`;

const SettingsSavedMessage = styled.span`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const SettingsPage: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const defaultNationalities = useSelector(nationalitiesSelector);
  const [nationalities, setNationalities] = useState<Nationality[]>(defaultNationalities);
  const [showSettingsSavedMessage, setShowSettingsSavedMessage] = useState<boolean>(false);

  useEffect(() => {
    const savedMessageTimer = window.setTimeout(() => {
      setShowSettingsSavedMessage(false);
    }, 2000);

    // Clean up the timeout in case the component is unmounted before the timer is up.
    return () => window.clearTimeout(savedMessageTimer);
  }, []);

  const saveSettings = () => {
    // Dispatch an action to update the nationalities in the redux store
    dispatch(getSelectedNationalities(nationalities));

    // Reset the contacts list and fetch new ones now that the nationalities have been updated
    dispatch(resetContactsList());
    dispatch(fetchContacts());

    // Show "Settings Saved" message and hide it 2 seconds later to give the user instant feedback
    setShowSettingsSavedMessage(true);
  };

  const onNationalitiesChanged = (updatedNationalities: Nationality[]) => {
    // Update local state
    setNationalities([...updatedNationalities]);
  };

  return (
    <Page heading="Settings">
      <SettingsInfoText>Select nationalities to be included in your address book:</SettingsInfoText>
      <NationalitiesSelector nationalities={nationalities} onNationalitiesChanged={onNationalitiesChanged} />
      {showSettingsSavedMessage && <SettingsSavedMessage>{'Settings saved! 👌'}</SettingsSavedMessage>}
      <Button onClick={saveSettings} size={50}>
        Save
      </Button>
    </Page>
  );
};

export default SettingsPage;
