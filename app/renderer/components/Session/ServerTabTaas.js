import React, { Component } from 'react';
import { Form, Row, Col, Input } from 'antd';
import SessionStyles from './Session.css';
import { INPUT } from '../../../../gui-common/components/AntdTypes';

const FormItem = Form.Item;

export default class ServerTabTaas extends Component {

  render () {

    const {server, setServerParam, t} = this.props;
    const taasHostPlaceholder = 'localhost';
    const taasAccessKeyExample = 'kjdgtdwn65fdasd78uy6y';

    return <Form>
      <Row gutter={8}>
        <Col span={12}>
          <FormItem>
            <Input className={SessionStyles.customServerInputLeft} id='TaasServerHost' placeholder={taasHostPlaceholder} addonBefore={t('Taas Host')}
              value={server.taas.hostname} onChange={(e) => setServerParam('hostname', e.target.value)} />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={12}>
          <FormItem>
            <Input id='accessKey' type={INPUT.TEXT} placeholder={taasAccessKeyExample} addonBefore={t('Taas API Key')}
              value={server.taas.accessKey} onChange={(e) => setServerParam('accessKey', e.target.value)} />
          </FormItem>
        </Col>
      </Row>
    </Form>;
  }
}
