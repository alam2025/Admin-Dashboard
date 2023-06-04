import React, { useEffect, useState } from 'react';
import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack } from '@chakra-ui/react';
import edit from "../../assets/edit.svg";
import watch from "../../assets/watch.svg";

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState([
    { name: 'Fajr', time: '05.20 am' },
    { name: 'Juhr', time: '01.30 pm' },
    { name: 'Asar', time: '04.45 pm' },
    { name: 'Magrib', time: '07.00 pm' },
    { name: 'Esha', time: '09.15 pm' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPrayerIndex, setSelectedPrayerIndex] = useState(null);
  const [newTime, setNewTime] = useState('');

  useEffect(() => {
    const storedPrayerTimes = localStorage.getItem('prayerTimes');
    if (storedPrayerTimes) {
      setPrayerTimes(JSON.parse(storedPrayerTimes));
    }
  }, []);

  const handlePrayerTimeEdit = (index, newTime) => {
    setPrayerTimes((prevPrayerTimes) => {
      const updatedPrayerTimes = [...prevPrayerTimes];
      updatedPrayerTimes[index].time = newTime;
      localStorage.setItem('prayerTimes', JSON.stringify(updatedPrayerTimes));
      return updatedPrayerTimes;
    });
  };

  const openModal = (index) => {
    setIsModalOpen(true);
    setSelectedPrayerIndex(index);
    setNewTime(prayerTimes[index].time);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPrayerIndex(null);
    setNewTime('');
  };

  const handleTimeChange = () => {
    if (selectedPrayerIndex !== null && newTime.trim() !== '') {
      handlePrayerTimeEdit(selectedPrayerIndex, newTime);
      closeModal();
    }
  };

  const splitTime = (time) => {
    const [hour, minute, meridiem] = time.split(/[.: ]/);
    return { hour, minute, meridiem };
  };

  const joinTime = ({ hour, minute, meridiem }) => {
    return `${hour}.${minute} ${meridiem}`;
  };

  const handleHourChange = (e) => {
    const { minute, meridiem } = splitTime(newTime);
    setNewTime(`${e.target.value}.${minute} ${meridiem}`);
  };

  const handleMinuteChange = (e) => {
    const { hour, meridiem } = splitTime(newTime);
    setNewTime(`${hour}.${e.target.value} ${meridiem}`);
  };

  const handleMeridiemChange = (e) => {
    const { hour, minute } = splitTime(newTime);
    setNewTime(`${hour}.${minute} ${e.target.value}`);
  };

  return (
    <Box className="flex flex-col gap-7 w-[300px] ">
      {prayerTimes.map((prayer, index) => (
        <Box className="flex justify-between items-center" key={prayer.name}>
          <Box>
            <h1 className="text-[#696969] font-Inter font-normal text-[24px]">
              {prayer.name}
            </h1>
          </Box>
          <Box className="bg-[#F4F4F4] w-[200px] h-[48px] flex items-center justify-center gap-8 cursor-pointer rounded">
            <img className="w-[20px] h-[20px]" src={watch} alt="" />
            <p className="text-[#696969] font-Inter font-normal text-[16px]">
              {prayer.time}
            </p>
            <img
              className="w-[16px] h-[16px]"
              src={edit}
              alt=""
              onClick={() => openModal(index)}
            />
          </Box>
        </Box>
      ))}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent marginTop='370px'>
          <ModalHeader>
            Select Prayer Time: {selectedPrayerIndex !== null ? prayerTimes[selectedPrayerIndex].name : ''}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Stack direction="row" spacing={2}>
              <Select value={splitTime(newTime).hour} onChange={handleHourChange}>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </Select>
              <Select value={splitTime(newTime).minute} onChange={handleMinuteChange}>
                {Array.from({ length: 60 }, (_, i) => (
                  <option key={i}>{i < 10 ? `0${i}` : i}</option>
                ))}
              </Select>
              <Select value={splitTime(newTime).meridiem} onChange={handleMeridiemChange}>
                <option value="am">AM</option>
                <option value="pm">PM</option>
              </Select>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleTimeChange}>
              Save
            </Button>
            <Button onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PrayerTimes;
