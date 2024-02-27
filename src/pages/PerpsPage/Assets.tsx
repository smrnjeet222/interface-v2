import React from 'react';
import { useAccount } from '@orderly.network/hooks';
import {
  useChains,
  useCollateral,
  useDeposit,
  useWithdraw,
} from '@orderly.network/hooks';
import { API } from '@orderly.network/types';
import {
  Button,
  Flex,
  Grid,
  Heading,
  Table,
  TextField,
  Container,
  Box,
  Text,
} from '@radix-ui/themes';
import { FC, useMemo, useState } from 'react';
import { useActiveWeb3React } from 'hooks';
import CustomModal from '../../components/CustomModal';
import ArrowDownward from '../../assets/images/downward-arrow.svg';
export const Assets: FC = () => {
  const { account, state } = useAccount();
  const { account: quickSwapAccount, library, chainId } = useActiveWeb3React();

  const collateral = useCollateral();
  const [chains, { findByChainId }] = useChains('testnet');
  const token = useMemo(() => {
    return Array.isArray(chains) ? chains[0].token_infos[0] : undefined;
  }, [chains]);
  const [amount, setAmount] = useState<string | undefined>();
  const deposit = useDeposit({
    address: token?.address,
    decimals: token?.decimals,
    srcToken: token?.symbol,
    srcChainId: Number(chainId),
    depositorAddress: quickSwapAccount,
  });
  const { withdraw } = useWithdraw();

  return (
    <Flex
      style={{ margin: '1.5rem' }}
      gap='3'
      align='center'
      justify='center'
      direction='column'
    >
      <Box
        style={{
          padding: '10px 15px',
          width: 432,
          height: 580,
          borderRadius: 16,
          boxShadow: '0 0 32px 0 rgba(46, 48, 60, 0.12)',
          backgroundColor: '#1b1e29',
        }}
      >
        <Flex align='start' justify='between' direction='row' gap='2'>
          <Container>
            <Text
              size='4'
              weight='medium'
              style={{ color: '#ebecf2', fontFamily: 'Inter', margin: '0 5px' }}
            >
              Deposit
            </Text>
            <Text
              size='4'
              weight='medium'
              style={{ color: '#61657a', fontFamily: 'Inter', margin: '0 5px' }}
            >
              Withdraw
            </Text>
          </Container>
        </Flex>
        <Flex
          align='start'
          justify='between'
          direction='row'
          style={{ marginTop: '20px' }}
        >
          <Text
            size='2'
            style={{ color: '#ebecef', fontFamily: 'Inter', fontWeight: '500' }}
          >
            Your web3 wallet
          </Text>
          <Text
            size='2'
            style={{ color: '#ebecef', fontFamily: 'Inter', fontWeight: '500' }}
          ></Text>
        </Flex>
        <Flex
          align={'center'}
          gap={'2'}
          style={{ width: 'full', margin: '10px 0 16px 0' }}
        >
          <Box
            style={{
              width: '196px',
              height: '40px',
              backgroundColor: '#282d3d',
              color: '#ccced9',
              opacity: '0.6',
              borderRadius: '8px',
              padding: '10px 99px 13px 16px',
            }}
          >
            0e58...324
          </Box>
          <Box
            style={{
              width: '196px',
              height: '40px',
              backgroundColor: '#282d3d',
              color: '#ccced9',
              opacity: '0.6',
              borderRadius: '8px',
              padding: '10px 99px 13px 16px',
            }}
          >
            Polygon
          </Box>
        </Flex>
        <Flex
          justify={'between'}
          direction={'row'}
          style={{
            width: '400px',
            height: '70px',
            borderRadius: '8px',
            margin: '8px 0 0',
            padding: '11px 16px 15px',
            backgroundColor: '#282d3d',
            opacity: '0.6',
          }}
        >
          <Flex justify={'start'} direction={'column'}>
            <Text
              style={{
                fontSize: '14px',
                fontFamily: 'Inter',
              }}
            >
              Quantity
            </Text>
            <input
              type='number'
              style={{
                width: '39px',
                height: '17px',
                margin: '8px 231px 2px 0',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 500,
                color: '#696c80',
                border: 'none',
                outline: 'none',
                appearance: 'none',
                backgroundColor: 'transparent',
              }}
              placeholder='$0.00'
            />
          </Flex>
          <Flex align={'end'} direction={'column'}>
            <Text size={'2'}>
              <span style={{ color: 'lightblue' }}>MAX</span> USDC
            </Text>
            <Text size={'2'}>
              <span>Available: </span> 100.00
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction={'row'}
          align={'center'}
          justify={'center'}
          style={{
            height: '32px',
            width: '400px',
            background: 'transparent',
            margin: '8px 0',
          }}
        >
          <div
            style={{
              width: '400px',
              height: '1px',
              margin: '16px 0 15px',
              backgroundColor: '#696c80',
              opacity: '0.12',
            }}
          />
          <img src={ArrowDownward} width={32} height={32} />
          <div
            style={{
              width: '400px',
              height: '1px',
              margin: '16px 0 15px',
              backgroundColor: '#696c80',
              opacity: '0.12',
            }}
          />
        </Flex>
        <Flex
          align='start'
          justify='between'
          direction='row'
          style={{ marginTop: '10px' }}
        >
          <Text
            size='2'
            style={{ color: '#ebecef', fontFamily: 'Inter', fontWeight: '500' }}
          >
            Your QuickPerps account
          </Text>
          <Text
            size='2'
            style={{ color: '#ebecef', fontFamily: 'Inter', fontWeight: '500' }}
          ></Text>
        </Flex>
        <Flex
          justify={'between'}
          direction={'row'}
          style={{
            width: '400px',
            height: '70px',
            borderRadius: '8px',
            margin: '8px 0 0',
            padding: '11px 16px 15px',
            backgroundColor: '#282d3d',
            opacity: '0.6',
          }}
        >
          <Flex justify={'start'} direction={'column'}>
            <Text
              style={{
                fontSize: '14px',
                fontFamily: 'Inter',
              }}
            >
              Receive
            </Text>
            <input
              type='number'
              style={{
                width: '39px',
                height: '17px',
                margin: '8px 231px 2px 0',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 500,
                color: '#696c80',
                border: 'none',
                outline: 'none',
                appearance: 'none',
                backgroundColor: 'transparent',
              }}
              placeholder='$0.00'
            />
          </Flex>
          <Flex align={'end'} direction={'column'}>
            <Text size={'2'}>USDC</Text>
            <Text size={'2'}>
              <span>Available: </span> 100.00
            </Text>
          </Flex>
        </Flex>

        <Flex
          justify={'between'}
          direction={'row'}
          style={{
            width: '400px',
            height: '55px',
            margin: '10px 0 0',
            fontSize: '12px',
            padding: '0 5px',
            fontFamily: 'Inter',
            color: '#696c80',
            fontWeight: 500,
          }}
        >
          <Flex justify={'start'} direction={'column'} gap={'1'}>
            <Text>1 USDC= 1 USD</Text>
            <Text>Fee = $0</Text>
          </Flex>
          <Flex align={'end'} direction={'column'}>
            <Text size={'2'}>Slippage: 1%</Text>
          </Flex>
        </Flex>
        <Box
          style={{
            margin: '0 36px',
            fontSize: '12px',
            fontFamily: 'Inter',
            textAlign: 'center',
            fontWeight: 500,
            color: '#ccced9',
          }}
        >
          Cross-chain transaction fees will be charged. To avoid fees, use our
          supported Bridgeless networks.
        </Box>
        <Container style={{ marginTop: '20px' }}>
          <Button
            style={{
              width: '400px',
              height: '48px',
              padding: '13px 143px 15px',
              borderRadius: '14px',
              backgroundColor: '#448aff',
              color: '#fff',
            }}
            disabled={amount == null}
            onClick={async () => {
              if (amount == null) return;
              if (Number(deposit.allowance) < Number(amount)) {
                await deposit.approve(amount.toString());
              } else {
                await deposit.deposit(amount);
              }
            }}
          >
            {Number(deposit.allowance) < Number(amount) ? 'Approve' : 'Deposit'}
          </Button>
        </Container>
      </Box>
    </Flex>
    // <Flex
    //   style={{ margin: '1.5rem' }}
    //   gap='3'
    //   gap='3'
    //   align='center'
    //   justify='center'
    //   direction='column'
    // >
    //   <Heading>Assets</Heading>
    //   <Table.Root>
    //     <Table.Body>
    //       <Table.Row style={{ color: 'white' }}>
    //         <Table.RowHeaderCell>Wallet Balance:</Table.RowHeaderCell>
    //         <Table.Cell>{deposit.balance}</Table.Cell>
    //       </Table.Row>
    //       <Table.Row  style={{ color: 'white' }}>
    //         <Table.RowHeaderCell>Deposit Balance:</Table.RowHeaderCell>
    //         <Table.Cell>{collateral.availableBalance}</Table.Cell>
    //       </Table.Row>
    //     </Table.Body>
    //   </Table.Root>
    //   <Grid
    //     columns='2'
    //     rows='2'
    //     gap='1'
    //     style={{
    //       gridTemplateAreas: `'input input' 'deposit withdraw' 'mint mint'`,
    //     }}
    //   >
    //     <TextField.Root style={{ gridArea: 'input', color: 'white' }}>
    //       <TextField.Input
    //         type='number'
    //         step='0.01'
    //         min='0'
    //         placeholder='USDC amount'
    //         onChange={(event) => {
    //           setAmount(event.target.value);
    //         }}
    //       />
    //     </TextField.Root>
    //
    //     <Button
    //       style={{ gridArea: 'deposit', color: 'white' }}
    //       disabled={amount == null}
    //       onClick={async () => {
    //         if (amount == null) return;
    //         if (Number(deposit.allowance) < Number(amount)) {
    //           await deposit.approve(amount.toString());
    //         } else {
    //           await deposit.deposit(amount);
    //         }
    //       }}
    //     >
    //       {Number(deposit.allowance) < Number(amount) ? 'Approve' : 'Deposit'}
    //     </Button>
    //
    //     <Button
    //       style={{ gridArea: 'withdraw', color: 'white' }}
    //       disabled={amount == null}
    //       onClick={async () => {
    //         if (amount == null) return;
    //         await withdraw({
    //           chainId: Number(chainId),
    //           amount: amount,
    //           token: 'USDC',
    //           allowCrossChainWithdraw: false,
    //         });
    //       }}
    //     >
    //       Withdraw
    //     </Button>
    //   </Grid>

    // </Flex>
  );
};
