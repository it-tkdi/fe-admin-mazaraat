import React, { useState } from 'react'
import { Modal, Popconfirm, Row, Table } from 'antd';
import { Button, HelpText, TextInput, Title } from '../../components'
import { RoleContainer } from './RoleElement'
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Role = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const data = [
    {
      key: 1,
      role: "Super Admin",
      deskripsi: "Super Admin",
    },
    {
      key: 2,
      role: "Cheese Maker",
      deskripsi: "Cheese Maker Pabrik Rotowijayan",
    },
    {
      key: 3,
      role: "Cheese Maker",
      deskripsi: "Cheese Maker Pabrik Cangkringan",
    },
    {
      key: 4,
      role: "Cheese Maker",
      deskripsi: "Cheese Maker Pabrik Banyuwangi",
    },
    {
      key: 5,
      role: "Supervisor",
      deskripsi: "Supervisor Pabrik Rotowijayan",
    },
    {
      key: 6,
      role: "Supervisor",
      deskripsi: "Supervisor Pabrik Cangkringan",
    },
    {
      key: 7,
      role: "Supervisor",
      deskripsi: "Supervisor Pabrik banyuwangi",
    },
    {
      key: 8,
      role: "Sales",
      deskripsi: "Sales",
    },
  ];

  const columns = [
    {
      title: "Role",
      dataIndex: "role",
      key: "key",
    },
    {
      title: "Deskripsi",
      dataIndex: "deskripsi",
      key: "key",
      // render: (aktif) => {
      //   return <p>{aktif ? "Aktif" : "Tidak Aktif"}</p>;
      // },
    },
    {
      title: "Action",
      key: "action",
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
  return (
    <RoleContainer>
      <Title title="Role" size="30px" weight={500} />
      <div style={{ marginBottom: 30 }}></div>
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
        title="Ubah Role"
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
      </Modal>
    </RoleContainer>
  );
}

export default Role