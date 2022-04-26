import { Row, Table } from 'antd';
import React, { useState } from 'react'
import { Title } from '../../components'
import { InventoryContainer, InventoryContent } from './InventoryElement'
import {EditOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const Inventory = () => {
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
    },
    {
      key: 2,
      nama: "Appenzeller - Moon River",
      stok: "",
      harga: "",
      kategori: "",
    },
    {
      key: 3,
      nama: "Tomme de Merapi",
      stok: "",
      harga: "",
      kategori: "",
    },
    {
      key: 4,
      nama: "Ibra - Mazaraat",
      stok: "",
      harga: "",
      kategori: "",
    },
    {
      key: 5,
      nama: "Athan - Mazaraat",
      stok: "",
      harga: "",
      kategori: "",
    },
    {
      key: 6,
      nama: "Halloumi",
      stok: "",
      harga: "",
      kategori: "",
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
  ];

  return (
    <InventoryContainer>
      <Title title="Inventory" size="30px" weight={500} />
      <div style={{marginBottom: 30}}></div>
      <InventoryContent>
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
      </InventoryContent>
    </InventoryContainer>
  );
}

export default Inventory