# Application Name: qdt-project

## Installation
```bash
$ cd simple-chat
$ npm install
```

## Running the app

```bash
# development
$ nodemon app.js

# production mode
$ npm run start
```
```
# API List

# Barang

| Routes | EndPoint                | Description                                                            |
| ------ | ------------------------| ---------------------------------------------------------------------- |
| GET    | /barang/list            | List dari barang, bisa search berdasarkan keyword nama, juga bisa di-  |
|        |                         | urutkan berdasarkan jumlah stok atau tanggal dibuat ASC ataupun DSC    |
| POST   | /barang/create          | Submit barang baru ke database                                         |
| GET    | /barang/:id             | Mengambil data berdasarkan ID                                          |
| UPDATE | /barang/:id             | Update barang, baik nama, jenis ataupun stok barang                    |
| DELETE | /barang/:id             | Menghapus record barang di database                                    |

# Order

| Routes | EndPoint                | Description                                                            |
| ------ | ------------------------| ---------------------------------------------------------------------- |
| GET    | /order/list             | List dari order                                                        |
| POST   | /order/create           | Membuat orderan                                                        |
| GET    | /order/:id              | Melihat detail orderan                                                 |
| DELETE | /order/:id              | Menghapus record orderan di database                                   |

# Sales Data

| Routes | EndPoint                | Description                                                            |
| ------ | ------------------------| ---------------------------------------------------------------------- |
| GET    | /sales/data             | List dari penjualan, barang yang dijual,quantitynya dan tanggalnya     |
| GET    | /sales/total            | Melihat penjualan terbanyak dan terendah, bisa difilter berdasarkan    |
|        |                         | waktu teransaksi                                                       |

```
GET /barang/list
req.query(optional) = { search: string, orderBy: string, arrBy: string }

POST /barang/create
req.body = { name: string, jenis: string, stok: number }

GET /barang/:id
req.params = { id: number}

UPDATE /barang/:id
req.params = { id: number }
req.body(optional) = { name: string, jenis: string, stok: number }

DELETE /barang/:id
req.params = { id: number }
```

```
GET /order/list

POST /order/create
req.body = { barangId: number, quantity: number }

GET /order/:id
req.params = { id: number}

DELETE /order/:id
req.params = { id: number }
```
```
GET /sales/data
req.query(optional) = { search: string, orderBy: string, arrBy: string }

GET /sales/total
req.query(optional) = { startDate: dateTime, endDate: dateTime }
```