import PropTypes from 'prop-types';
import React from 'react';
import {Circle, Rect} from 'react-native-svg';
import SkeletonViewContentLoader from '@components/SkeletonViewContentLoader';
import styles from '@styles/styles';
import themeColors from '@styles/themes/default';
import CONST from '@src/CONST';

const propTypes = {
    /** Number of rows to show in Skeleton UI block */
    numberOfRows: PropTypes.number.isRequired,
    shouldAnimate: PropTypes.bool,
};

const defaultTypes = {
    shouldAnimate: true,
};

function SkeletonViewLines(props) {
    return (
        <SkeletonViewContentLoader
            animate={props.shouldAnimate}
            height={CONST.CHAT_SKELETON_VIEW.HEIGHT_FOR_ROW_COUNT[props.numberOfRows]}
            backgroundColor={themeColors.skeletonLHNIn}
            foregroundColor={themeColors.skeletonLHNOut}
            style={styles.mr5}
        >
            <Circle
                cx="40"
                cy="26"
                r="20"
            />
            <Rect
                x="72"
                y="11"
                width="20%"
                height="8"
            />
            <Rect
                x="72"
                y="31"
                width="100%"
                height="8"
            />
            {props.numberOfRows > 1 && (
                <Rect
                    x="72"
                    y="51"
                    width="50%"
                    height="8"
                />
            )}
            {props.numberOfRows > 2 && (
                <Rect
                    x="72"
                    y="71"
                    width="50%"
                    height="8"
                />
            )}
        </SkeletonViewContentLoader>
    );
}

SkeletonViewLines.displayName = 'SkeletonViewLines';
SkeletonViewLines.propTypes = propTypes;
SkeletonViewLines.defaultProps = defaultTypes;
export default SkeletonViewLines;
