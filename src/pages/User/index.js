import { Input, Modal, Popconfirm, Row, Table } from 'antd'
import React, { useState } from 'react'
import { Button, HelpText, SearchInput, TextInput, Title } from '../../components'
import { TopWrapper, UserContainer } from './UserElement'
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const { Search } = Input;

const UserPage = () => {
  const data = [
    {
      name: "Dudung",
      age: 30,
      address: "address 1",
      key: 1,
      role: "Admin",
    },
    {
      name: "Maman",
      age: 22,
      address: "address 2",
      key: 2,
      role: "Admin",
    },
    {
      name: "Abdul",
      age: 33,
      address: "address 3",
      key: 3,
      role: "Supervisor",
    },
    {
      name: "John",
      age: 34,
      address: "address 4",
      key: 4,
      role: "Cheese Maker",
    },
    {
      name: "Ben",
      age: 25,
      address: "address 5",
      key: 5,
      role: "Cheese Maker",
    },
    {
      name: "Parker",
      age: 20,
      address: "address 6",
      key: 6,
      role: "Cheese Maker",
    },
    {
      name: "Tony",
      age: 27,
      address: "address 7",
      key: 7,
      role: "Cheese Maker",
    },
    {
      name: "Lisa",
      age: 18,
      address: "address 8",
      key: 8,
      role: "Cheese Maker",
    },
    {
      name: "Emma",
      age: 19,
      address: "address 9",
      key: 9,
      role: "Cheese Maker",
    },
    {
      name: "Stone",
      age: 20,
      address: "address 10",
      key: 10,
      role: "Cheese Maker",
    },
    {
      name: "Dwayne",
      age: 40,
      address: "address 11",
      key: 11,
      role: "Supervisor",
    },
    {
      name: "Karen",
      age: 20,
      address: "address 12",
      key: 12,
      role: "Sales",
    },
    {
      name: "Dave",
      age: 21,
      address: "address 14",
      key: 13,
      role: "Cheese Maker",
    },
    {
      name: "Agan",
      age: 22,
      address: "address 14",
      key: 14,
      role: "Sales",
    },
    {
      name: "Chris",
      age: 32,
      address: "address 15",
      key: 15,
      role: "Sales",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "key",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "key",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "key",
      // render: (status)=> {
      //   return <p>{status? 'Aktif':'Tidak Aktif'}</p>
      // },
      filters: [
        { text: "Admin", value: "Admin" },
        { text: "Cheese Maker", value: "Cheese Maker" },
        { text: "Supervisor", value: "Supervisor" },
        { text: "Sales", value: "Sales" },
      ],
      onFilter: (value, record) => {
        return record.role === value;
      },
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      render: (text, record) => (
        <Row align="middle" justify="space-around">
          <EditOutlined
            style={{ fontSize: 20, color: "#F08618" }}
            onClick={showModal}
          />
          <Popconfirm
            placement="topLeft"
            title="Apa Anda yakin untuk menghapus user ini?"
            // onConfirm={() => deleteUser(record.id)}
            okText="Ya"
            cancelText="Batal"
          >
            <DeleteOutlined style={{ fontSize: 20, color: "#F08618" }} />
          </Popconfirm>
        </Row>
      ),
    },
  ];

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tes, setTes] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const onSearch = (e) => {
    setTes(e.target.value);
    console.log(e.target.value);
  }

  return (
    <UserContainer>
      <Title title="User" size="30px" weight={500} />
      <TopWrapper>
        {/* <SearchInput searchText={tes} valInput={onSearch} /> */}
        <Search
          placeholder="Search"
          bordered
          onSearch={onSearch}
          style={{
            width: 200,
            backgroundColor: "#F6F4F3",
            border: "none",
          }}
        />
        <Button
          width={178}
          height={40}
          color="#F08618"
          text="Tambah User"
          hover="#F39E46"
          onClick={showModal}
        />
      </TopWrapper>

      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          current: page,
          pageSize: pageSize,
          // total: 100,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
      />

      <Modal
        title="Tambah User"
        visible={isModalVisible}
        onCancel={handleCancel}
        bodyStyle={{
          padding: "50px",
        }}
        maskStyle={{
          backgroundColor: "#715944",
          opacity: 0.5,
        }}
        footer={[
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Button
              width={100}
              height={40}
              color="#EDEAE8"
              text="Cancel"
              textColor="#4D2F15"
              hover="#DBD5D0"
              onClick={handleCancel}
            />
            <div style={{ marginRight: 8 }}></div>
            <Button
              width={100}
              height={40}
              color="#F08618"
              text="Submit"
              hover="#F39E46"
              onClick={handleOk}
            />
          </div>,
        ]}
      >
        <HelpText text="Field 1" />
        <TextInput />
        <div style={{ marginBottom: 30 }}></div>
        <HelpText text="Field 2" />
        <TextInput />
        <div style={{ marginBottom: 30 }}></div>
        <HelpText text="Field 3" />
        <TextInput />
        <div style={{ marginBottom: 30 }}></div>
        <HelpText text="Field 4" />
        <TextInput />
        <div style={{ marginBottom: 30 }}></div>
        <HelpText text="Field 5" />
        <TextInput />
      </Modal>
    </UserContainer>
  );
}

export default UserPage