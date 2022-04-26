import React, { useState } from 'react'
import { Modal, Popconfirm, Row, Table } from 'antd';
import { Button, HelpText, TextInput, Title } from '../../components'
import { PabrikContainer } from './PabrikElement'
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Pabrik = () => {
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
      id: 401,
      pabrik: "",
      alias: "Pabrik Rotowijayan",
      location: "",
      aktif: true,
    },
    {
      key: 2,
      id: 402,
      pabrik: "",
      alias: "Pabrik Cangkringan",
      location: "",
      aktif: true,
    },
    {
      key: 3,
      id: 403,
      pabrik: "",
      alias: "Pabrik Banyuwangi",
      location: "",
      aktif: true,
    },
  ];

  const columns = [
    {
      title: "Pabrik",
      dataIndex: "pabrik",
      key: "key",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "key",
    },
    {
      title: "Alias",
      dataIndex: "alias",
      key: "key",
    },
    {
      title: "Lokasi",
      dataIndex: "location",
      key: "key",
    },
    {
      title: "Aktif",
      dataIndex: "aktif",
      key: "key",
      render: (aktif) => {
        return <p>{aktif ? "Aktif" : "Tidak Aktif"}</p>;
      },
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
        </Row>
      ),
    },
  ];
  return (
    <PabrikContainer>
      <Title title="Pabrik" size="30px" weight={500} />
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
        title="Ubah Pabrik"
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
      </Modal>
    </PabrikContainer>
  );
}

export default Pabrik