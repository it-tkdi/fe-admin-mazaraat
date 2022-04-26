import React, { useState } from 'react'
import { Modal, Row, Table } from 'antd';
import { Button, HelpText, TextInput, Title } from '../../components';
import { KategoriContainer } from './KategoriElement'
import { EditOutlined } from '@ant-design/icons'

const Kategori = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
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
      kategori: "Soft Cheese",
      aktif: true,
    },
    {
      key: 2,
      kategori: "Semi-soft Cheese",
      aktif: false,
    },
    {
      key: 3,
      kategori: "Medium-hard Cheese",
      aktif: true,
    },
    {
      key: 4,
      kategori: "Semi-hard Cheese",
      aktif: false,
    },
    {
      key: 5,
      kategori: "Hard Cheese",
      aktif: true,
    },
  ];

  const columns = [
    {
      title: "Kategori",
      dataIndex: "kategori",
      key: "key",
    },
    {
      title: "Status",
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
            onClick={() => showModal()}
          />
        </Row>
      ),
    },
  ];

  return (
    <KategoriContainer>
      <Title title="Kategori Keju" size="30px" weight={500} />
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
        title="Ubah Kategori"
        visible={isModalVisible}
        onCancel={handleCancel}
        bodyStyle={{
          padding: '50px'
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
    </KategoriContainer>
  );
}

export default Kategori