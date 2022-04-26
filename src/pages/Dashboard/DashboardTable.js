import { Table } from 'antd';
import React, { useState } from 'react'
import { SubTitle, Title } from '../../components';
import { DashboardContainer, IcWrap, TopWrapper } from './DashboardElement'
import { icArrowLeft } from '../../assets';
import { useNavigate } from 'react-router-dom';

const DashboardTable = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const data = [
      {
        key: 1,
        nama: "Cheddar - Moon River",
        stok: "",
        kategori: "",
      },
      {
        key: 2,
        nama: "Appenzeller - Moon River",
        stok: "",
        kategori: "",
      },
      {
        key: 3,
        nama: "Tomme de Merapi",
        stok: "",
        kategori: "",
      },
      {
        key: 4,
        nama: "Ibra - Mazaraat",
        stok: "",
        kategori: "",
      },
      {
        key: 5,
        nama: "Athan - Mazaraat",
        stok: "",
        kategori: "",
      },
      {
        key: 6,
        nama: "Halloumi",
        stok: "",
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
        title: "Kategori",
        dataIndex: "kategori",
        key: "key",
      },
    ];

    const navigate = useNavigate();
  return (
    <DashboardContainer>
      <TopWrapper>
        <IcWrap onClick={() => navigate(-1)} src={icArrowLeft} />
        <Title title="Cheese Created" size="18px" weight={500} />
      </TopWrapper>
      <div style={{ marginBottom: 16 }}></div>
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
    </DashboardContainer>
  );
}

export default DashboardTable