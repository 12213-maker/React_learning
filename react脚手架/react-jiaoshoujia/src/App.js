import React, { PureComponent } from 'react'
import { Button, Space ,DatePicker  } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons';
import moment from 'moment'
import About from 'component/about/abput2/abput3'
const { RangePicker } = DatePicker;


export default class App extends PureComponent {
  render() {
    const loadings = true
    return (
      <>
      <About/>

        <Space style={{ width: '100%' }}>
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" size="small" loading>
            Loading
          </Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading />
        </Space>

        <Space style={{ width: '100%' }}>
          <Button type="primary" loading={loadings[0]} >
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[1]}
          >
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
          />

          <RangePicker
            ranges={{
              Today: [moment(), moment()],
              'This Month': [moment().startOf('month'), moment().endOf('month')],
            }}
            showTime
            format="YYYY/MM/DD HH:mm:ss"
          />
        </Space>
      </>
    )
  }
}
