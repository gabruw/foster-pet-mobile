//#region Imports

import COLOR from 'assets/styles/color';
import React, { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import NativeModal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import clsx from 'utils/functions/clsx';
import useStyles from './styles';

//#endregion

const { DARKEST } = COLOR.PURPLE.PRIMARY;

const Modal = (
    { children, onClose, animationIn = 'fadeIn', animationOut = 'fadeOut', isFullView = false, ...rest },
    ref
) => {
    const styles = useStyles();
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        show: () => setIsVisible(true),
        hide: () => setIsVisible(false),
        handle: () => setIsVisible((prevState) => !prevState)
    }));

    const modalStyle = useMemo(() => isFullView && styles.fullModal, [isFullView, styles]);

    const containerStyle = useMemo(
        () =>
            clsx({
                [styles.container]: true,
                [styles.radius]: !isFullView
            }),
        [styles, isFullView]
    );

    const headerStyle = useMemo(
        () =>
            clsx({
                [styles.header]: true,
                [styles.alignLeft]: isFullView,
                [styles.alignRight]: !isFullView
            }),
        [styles, isFullView]
    );

    const icon = useMemo(() => (isFullView ? 'arrow-left' : 'times'), [isFullView]);

    return (
        <NativeModal
            style={modalStyle}
            isVisible={isVisible}
            animationIn={animationIn}
            animationOut={animationOut}
            onDismiss={() => onClose && onClose()}
            onBackdropPress={() => setIsVisible(false)}
            {...rest}
        >
            <View style={containerStyle}>
                <View style={headerStyle}>
                    <Button
                        type='clear'
                        onPress={() => setIsVisible(false)}
                        icon={<Icon size={18} name={icon} color={DARKEST} />}
                    />
                </View>
                {children}
            </View>
        </NativeModal>
    );
};

export default forwardRef(Modal);
