function TableRow({ stat, value }) {
  return (
    <tr>
      <td className="td">{stat}</td>
      <td className="td">{value}</td>
    </tr>
  )
}

export default TableRow
