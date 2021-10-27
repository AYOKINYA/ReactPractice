import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import styled, {ThemeProvider} from 'styled-components'
import { useTable } from 'react-table'
import theme from './theme'

import { CSVLink, CSVDownload } from "react-csv";

const TableSheet = styled.table`
    margin-top: 5px;
    border-spacing: 0;
    display: block;
    width: 909px;
    max-height: 300px;
    overflow: auto;
`;

const TableHead = styled.thead`
  padding-bottom: 1rem;
`;

const Header = styled.tr``;

const Th = styled.th`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.greyBorder};
  padding: 0.5rem 1rem;
  border-top: 1px solid black;
  border-bottom: 1px solid ${props => props.theme.greyBorder};
  line-height: 18px;
  font-size: 14px;
  font-family: 'Hyundai Sans Text KR OTF';
  font-style: normal;
  font-weight: normal;
  text-align: center;
  color: rgba(60, 94, 133, 1);
`;

const Td = styled.td`
  padding: 0.7rem 2rem;
  margin: 0;
  max-width: 30rem;
  border-bottom: 2px solid ${props => props.theme.greyBorder};
  font-size: 14px;
  font-family: 'Hyundai Sans Text KR OTF';
  font-style: normal;
  font-weight: normal;
  text-align: left;
  color: rgba(51, 51, 51, 1);
`;

const Table = ({ columns, data }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({ columns, data });
  
    return (
      <TableSheet {...getTableProps()}>
        <TableHead>
          {headerGroups.map(header => (
            <Header {...header.getHeaderGroupProps()}>
              {header.headers.map(col => (
                <Th {...col.getHeaderProps()}>{col.render('Header')}</Th>
              ))}
            </Header>
          ))}
        </TableHead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </TableSheet>
    );
  };


const SimNo = ({values}) => {
    return (
        <div style={{ textAlign: 'center' }}>
            #{values}
        </div>
      );
}

const StatusTags = styled.span`
  background-color: ${props => props.values === "Pending" ? '#ff8801' : '#1cec31'};
  color: #fff;
  font-size: 14px;
  margin: 0 0.5rem;
  padding: 0.2rem 1rem;
  border-radius: 2rem;
`;

const Status = ( {values} ) => {

    return (
    <div style={{ textAlign: 'center' }}>
        <StatusTags values={values}>{values}</StatusTags>
    </div>
  );
};

const CommentsTags = styled.span`
  padding-right: 8rem;
`;

const Comments = ( {values} ) => {

    return (
    <div style={{ textAlign: 'left' }}>
        <CommentsTags values={values}>{values}</CommentsTags>
    </div>
  );
};

const HistoryTable = () => {

    const columnData = [
        {
            accessor: 'SimulationNumber',
            Header: "Sim No.",
            Cell: ({ cell: { value } }) => <SimNo values={value} />,
        },
        {
            accessor: 'Status',
            Header: "Status",
            Cell: ({ cell: { value } }) => <Status values={value} />,
        },
        {
            accessor: 'Comments',
            Header: "Comments",
            Cell: ({ cell: { value } }) => <Comments values={value} />,
        },
        {
            accessor: 'StartDate',
            Header: "Start Date"
        },
        {
            accessor: 'EndDate',
            Header: "End Date"
        },
    ];

    const columns = useMemo(() => columnData, []);

    const [data, setdata] = useState([]);

    useEffect(() => {
        
        const fetchData = () => {
            axios
            .get("http://localhost:4000/simulation/history")
            .then(
                (res) => {
                    console.log(res.data)
                    setdata(res.data);
                    }
                )
            .catch(
                (e) => console.error(e)
                );
            };
            
        fetchData();
        
    }, []);

    const csvHeaders = [
      { label: "Sim No.", key: "SimulationNumber" },
      { label: "Status", key: "Status" },
      { label: "Comments", key: "Comments" },
      { label: "Start Date", key: "StartDate" },
      { label: "End Date", key: "EndDate" },
    ];

    const prettyLink  = {
      fontSize: 14,
      fontWeight: 500,
      height: 52,
      padding: '0 48px',
      borderRadius: 5,
      textDecoration: "none",
      color: "black"
    };


    return (
        <div>
        <div width="500px" height="20px" style={{display: "flex", width: "100%"}}>
            <div style={{width: "20%", float: "left", textAlign: "left"}}>
                Simulation History
            </div>
            <div style={{width: "40%", float: "left", textAlign: "right"}}>
                <span style={{ marginRight: "30px"}}>
                   <CSVLink data={data} headers={csvHeaders} filename="simulation_history.csv" style={prettyLink}>
                    <span style={{ marginRight: "5px"}}>
                        <img src="download-icon.svg" width="15px" height="15px"/>
                    </span>
                    
                    Download CSV
                    </CSVLink>;
                    
                </span>
                <svg style={{ width: "15px", height: "15px", marginRight: "15px"}} viewBox="-13759.001 3148.999 18.001 18.004">
                    <path d="M -13748.82421875 3167.0029296875 L -13748.8251953125 3167.0029296875 L -13751.1728515625 3167.0029296875 L -13751.8212890625 3164.395751953125 C -13752.3193359375 3164.255859375 -13752.78125 3164.0634765625 -13753.2294921875 3163.808837890625 L -13755.533203125 3165.197021484375 L -13757.1943359375 3163.5361328125 L -13755.8095703125 3161.23291015625 C -13756.05859375 3160.787353515625 -13756.2548828125 3160.31298828125 -13756.3935546875 3159.823974609375 L -13759.0009765625 3159.1748046875 L -13759.0009765625 3156.82666015625 L -13756.3935546875 3156.177490234375 C -13756.25390625 3155.683349609375 -13756.0556640625 3155.209228515625 -13755.806640625 3154.768798828125 L -13757.1943359375 3152.465576171875 L -13755.533203125 3150.8046875 L -13753.23046875 3152.189208984375 C -13752.7880859375 3151.9384765625 -13752.3271484375 3151.74755859375 -13751.8212890625 3151.605712890625 L -13751.1728515625 3148.998779296875 L -13748.82421875 3148.998779296875 L -13748.1748046875 3151.605712890625 C -13747.66796875 3151.749267578125 -13747.1943359375 3151.947021484375 -13746.7666015625 3152.19287109375 L -13744.462890625 3150.8046875 L -13742.8056640625 3152.465576171875 L -13744.1865234375 3154.768798828125 C -13743.939453125 3155.211669921875 -13743.7431640625 3155.68603515625 -13743.603515625 3156.177490234375 L -13741 3156.82666015625 L -13741 3159.1748046875 L -13743.603515625 3159.823974609375 C -13743.7451171875 3160.321533203125 -13743.9423828125 3160.795654296875 -13744.1904296875 3161.23291015625 L -13744.1865234375 3161.23291015625 L -13742.8056640625 3163.5361328125 L -13744.462890625 3165.197021484375 L -13746.7666015625 3163.812255859375 C -13747.2109375 3164.06103515625 -13747.685546875 3164.25732421875 -13748.1748046875 3164.395751953125 L -13748.82421875 3167.002197265625 L -13748.82421875 3167.0029296875 Z M -13749.998046875 3155.6630859375 C -13751.287109375 3155.6630859375 -13752.3359375 3156.711669921875 -13752.3359375 3158.000732421875 C -13752.3359375 3159.289794921875 -13751.287109375 3160.338623046875 -13749.998046875 3160.338623046875 C -13748.7099609375 3160.338623046875 -13747.6611328125 3159.289794921875 -13747.6611328125 3158.000732421875 C -13747.6611328125 3156.711669921875 -13748.7099609375 3155.6630859375 -13749.998046875 3155.6630859375 Z">
                    </path>
                </svg>
            </div>
        </div>
        <ThemeProvider theme={theme} >
            <Table columns={columns} data={data}/>
        </ThemeProvider>
        </div>
    );

}

export default HistoryTable;