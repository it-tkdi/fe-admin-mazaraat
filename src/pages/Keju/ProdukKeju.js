import React, { useState } from 'react'
import { Modal, Row, Table, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { Button, HelpText, SubTitle, TextInput, Title } from '../../components';
import { IcWrap, KejuContainer, TopTitle, TopWrapper } from './KejuElement';
import { icArrowLeft } from "../../assets";
import { useNavigate } from "react-router-dom";
const { Search } = Input;

const ProdukKeju = () => {
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

  const navigate = useNavigate();

  const data = [
    {
      key: 1,
      nama: "Cheddar - Moon River",
      stok: "",
      harga: "",
      kategori: "",
      deskripsi: "",
      foto: "",
      aktif: true,
    },
    {
      key: 2,
      nama: "Appenzeller - Moon River",
      stok: "",
      harga: "",
      kategori: "",
      deskripsi: "",
      foto: "",
      aktif: true,
    },
    {
      key: 3,
      nama: "Tomme de Merapi",
      stok: "",
      harga: "",
      kategori: "",
      deskripsi: "",
      foto: "",
      aktif: true,
    },
    {
      key: 4,
      nama: "Ibra - Mazaraat",
      stok: "",
      harga: "",
      kategori: "",
      deskripsi: "",
      foto: "",
      aktif: true,
    },
    {
      key: 5,
      nama: "Athan - Mazaraat",
      stok: "",
      harga: "",
      kategori: "",
      deskripsi: "",
      foto: "",
      aktif: true,
    },
    {
      key: 6,
      nama: "Halloumi",
      stok: "",
      harga: "",
      kategori: "",
      deskripsi: "",
      foto: "",
      aktif: true,
    },
  ];

  const columns = [
    {
      title: "Nama Keju",
      dataIndex: "nama",
      key: "key",
    },
    {
      title: "Stok",
      dataIndex: "stok",
      key: "key",
    },
    {
      title: "Harga",
      dataIndex: "harga",
      key: "key",
    },
    {
      title: "Kategori",
      dataIndex: "kategori",
      key: "key",
    },
    {
      title: "Deskripsi",
      dataIndex: "deskripsi",
      key: "key",
    },
    {
      title: "Foto",
      dataIndex: "Foto",
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
    <KejuContainer>
      <TopTitle>
        <IcWrap onClick={() => navigate(-1)} src={icArrowLeft} />
        <Title title="Daftar Produk" size="18px" weight={500} />
      </TopTitle>
      <TopWrapper>
        <Search
          placeholder="Search"
          bordered
          // onSearch={onSearch}
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
          text="Tambah Keju"
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
        title="Tambah Keju"
        visible={isModalVisible}
        onCancel={handleCancel}
        bodyStyle={{
          padding: '50px',
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
        <div style={{marginBottom: 30}}></div>
        <HelpText text="Field 2" />
        <TextInput />
        <div style={{marginBottom: 30}}></div>
        <HelpText text="Field 3" />
        <TextInput />
        <div style={{marginBottom: 30}}></div>
        <HelpText text="Field 4" />
        <TextInput />
        <div style={{marginBottom: 30}}></div>
        <HelpText text="Field 5" />
        <TextInput />
      </Modal>
    </KejuContainer>
  );
}

export default ProdukKeju