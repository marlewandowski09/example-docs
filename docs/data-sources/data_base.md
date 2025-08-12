---
sidebar_position: 4
title: Configuring Database Source
---
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

# Configuring Database Source

StreamData can connect directly to an SQL database. Currently, the supported databases are *Oracle* and *MySQL*.

![Database configuration window](/connect-sql.png)

## Steps to add a database source
1. Select either **MySQL** or **Oracle**.
2. Fill the required fields:
   
| Field           | Description |
| --------------- | ----------- |
| **Host**        | The address of the database server |
| **Port**        | Default ports: `3306` for MySQL and `1521` for Oracle |
| **Name**        | The name of your database |
| **Username**    | Your database username |
| **Password**    | Your database password |

3. Click **Connect** to test the connection.

:::info

When the connection to the database is established successfully, the **Connection status** field changes from <Highlight color="#f1c232">Not Established</Highlight> to <Highlight color="#6aa84f">OK</Highlight>.

:::

:::warning

If the **Connection status** field shows <Highlight color="#cc0000">Failed</Highlight>, verify that all fields are filled in correctly and the database is reachable from your network.

:::   

4. Click **Save** to complete the setup.