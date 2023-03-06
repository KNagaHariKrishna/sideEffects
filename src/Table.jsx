import React, { useState, useEffect, useRef } from 'react';

function Table() {
  const [selectedRowIndex, setSelectedRowIndex] = useState(0);
  const tableRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const table = tableRef.current;
      if (!table) return;
      const rows = table.querySelectorAll('tbody tr');
      if (!rows.length) return;
      let nextIndex = selectedRowIndex;
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          nextIndex = selectedRowIndex === 0 ? rows.length - 1 : selectedRowIndex - 1;
          break;
        case 'ArrowDown':
          event.preventDefault();
          nextIndex = selectedRowIndex === rows.length - 1 ? 0 : selectedRowIndex + 1;
          break;
        default:
          break;
      }
      setSelectedRowIndex(nextIndex);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedRowIndex]);

  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;
    const rows = table.querySelectorAll('tbody tr');
    if (!rows.length) return;
    rows.forEach((row, index) => {
      if (index === selectedRowIndex) {
        row.classList.add('selected');
      } else {
        row.classList.remove('selected');
      }
    });
  }, [selectedRowIndex]);

  return (
    <table ref={tableRef}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>30</td>
        </tr>
        <tr>
          <td>Bob</td>
          <td>35</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
